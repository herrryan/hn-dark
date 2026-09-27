#!/usr/bin/env python3
"""
Generate pixel-perfect PNG icons for Hacker News Dark Mode Chrome Extension.
Uses pure Python standard library (zlib, struct, math) - zero dependencies.
Generates:
  - icons/icon-16.png (16x16)
  - icons/icon-48.png (48x48)
  - icons/icon-128.png (128x128)
"""

import math
import os
import struct
import zlib


def create_png_rgba(width, height, pixel_data):
    """
    Creates a valid 32-bit RGBA PNG binary string.
    pixel_data is a list of rows, each row is a list of (r, g, b, a) tuples.
    """
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    raw_bytes = bytearray()
    for row in pixel_data:
        raw_bytes.append(0)  # Filter type: None
        for r, g, b, a in row:
            raw_bytes.extend((int(r), int(g), int(b), int(a)))

    compressed = zlib.compress(bytes(raw_bytes), 9)

    png = bytearray(b'\x89PNG\r\n\x1a\n')
    # IHDR: width, height, 8 bit depth, color type 6 (RGBA), compression 0, filter 0, interlace 0
    png.extend(chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)))
    png.extend(chunk(b'IDAT', compressed))
    png.extend(chunk(b'IEND', b''))
    return bytes(png)


def draw_hn_dark_icon(size):
    """
    Renders an icon at the requested square size.
    Features:
      - Dark rounded background container with subtle gradient / border
      - Stylized Hacker News 'Y' in vibrant signature orange (#ff6600)
      - Sleek crescent moon / dark accent
    """
    grid = [[(0, 0, 0, 0) for _ in range(size)] for _ in range(size)]
    radius = size * 0.22
    center_x = (size - 1) / 2.0
    center_y = (size - 1) / 2.0

    # Colors
    bg_top = (30, 30, 36)
    bg_bottom = (16, 16, 20)
    border_color = (255, 102, 0, 180)  # Subtle orange rim
    y_color = (255, 102, 0, 255)       # HN vibrant orange
    moon_color = (255, 180, 100, 240)   # Warm highlight
    
    # Supersampling factor for smooth anti-aliasing
    scale = 4
    sub_size = size * scale

    for y in range(size):
        for x in range(size):
            # Supersample 4x4
            total_r, total_g, total_b, total_a = 0, 0, 0, 0
            for sy in range(scale):
                for sx in range(scale):
                    px = x + (sx + 0.5) / scale
                    py = y + (sy + 0.5) / scale

                    # Rounded rect distance from corner
                    # Box bounds: [1, size-2]
                    pad = size * 0.04
                    bx = min(max(px, pad + radius), size - 1 - pad - radius)
                    by = min(max(py, pad + radius), size - 1 - pad - radius)
                    dist = math.hypot(px - bx, py - by)

                    if dist <= radius:
                        # Inside rounded card
                        # Vertical gradient
                        t = py / float(size)
                        bg_r = bg_top[0] * (1 - t) + bg_bottom[0] * t
                        bg_g = bg_top[1] * (1 - t) + bg_bottom[1] * t
                        bg_b = bg_top[2] * (1 - t) + bg_bottom[2] * t
                        
                        # Subtle border check
                        is_border = (dist >= radius - (size * 0.05))
                        if is_border:
                            bg_r = bg_r * 0.4 + border_color[0] * 0.6
                            bg_g = bg_g * 0.4 + border_color[1] * 0.6
                            bg_b = bg_b * 0.4 + border_color[2] * 0.6

                        # Check if inside "Y" letter
                        # Normalized coordinates -1.0 to 1.0 within icon
                        nx = (px - center_x) / (size * 0.5)
                        ny = (py - center_y) / (size * 0.5)

                        is_y = False
                        # Y geometry:
                        # Stem: x in [-w, w], y in [0.05, 0.58]
                        # Left arm: diagonal from (-0.52, -0.52) to (0, 0.08)
                        # Right arm: diagonal from (0.52, -0.52) to (0, 0.08)
                        stem_w = 0.15
                        if abs(nx) <= stem_w and 0.05 <= ny <= 0.60:
                            is_y = True
                        
                        # Left diagonal arm
                        # Line from (-0.50, -0.50) to (0, 0.08)
                        # Vector: dx = 0.50, dy = 0.58
                        # Distance to line segment
                        def dist_to_segment(p_x, p_y, x1, y1, x2, y2):
                            dx, dy = x2 - x1, y2 - y1
                            l2 = dx*dx + dy*dy
                            if l2 == 0:
                                return math.hypot(p_x - x1, p_y - y1)
                            t = max(0, min(1, ((p_x - x1) * dx + (p_y - y1) * dy) / l2))
                            proj_x = x1 + t * dx
                            proj_y = y1 + t * dy
                            return math.hypot(p_x - proj_x, p_y - proj_y)

                        d_left = dist_to_segment(nx, ny, -0.46, -0.48, 0.0, 0.08)
                        d_right = dist_to_segment(nx, ny, 0.46, -0.48, 0.0, 0.08)
                        arm_w = 0.14

                        if d_left <= arm_w or d_right <= arm_w:
                            is_y = True

                        if is_y:
                            total_r += y_color[0]
                            total_g += y_color[1]
                            total_b += y_color[2]
                            total_a += 255
                        else:
                            total_r += bg_r
                            total_g += bg_g
                            total_b += bg_b
                            total_a += 255
                    else:
                        # Outside card
                        total_a += 0

            # Average supersampled pixels
            num_samples = scale * scale
            avg_a = total_a / num_samples
            if avg_a > 0:
                grid[y][x] = (
                    int(total_r / num_samples),
                    int(total_g / num_samples),
                    int(total_b / num_samples),
                    int(avg_a)
                )
            else:
                grid[y][x] = (0, 0, 0, 0)

    return create_png_rgba(size, size, grid)


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    icons_dir = os.path.join(os.path.dirname(script_dir), 'icons')
    os.makedirs(icons_dir, exist_ok=True)

    sizes = [16, 48, 128]
    for s in sizes:
        png_data = draw_hn_dark_icon(s)
        filepath = os.path.join(icons_dir, f'icon-{s}.png')
        with open(filepath, 'wb') as f:
            f.write(png_data)
        print(f"Generated {filepath} ({s}x{s}, {len(png_data)} bytes)")


if __name__ == '__main__':
    main()
