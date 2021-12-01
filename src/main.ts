import { rgb24, bgRgb24, bold, italic } from "https://deno.land/std@0.116.0/fmt/colors.ts"

interface Rgb {r: number, g: number, b: number}

export const rgb = (r: number, g: number, b: number) => ({r, g, b})

type Op<X, Y> = (x: X) => Y

export function $<A, B>(op1: Op<A, B>,): (a: A) => B
export function $<A, B, C>(
    op1: Op<A, B>,
    op2: Op<B, C>,
): (a: A) => C
export function $<A, B, C, D>(
    op1: Op<A, B>,
    op2: Op<B, C>,
    op3: Op<C, D>,
): (a: A) => C
export function $(...fs: ((a: unknown) => unknown)[]) {
    return (init: unknown) => fs.reduce((v, f) => f(v), init)
}

const strz: (text: string | TemplateStringsArray) => string = String

const base = 
    (f: (str: string, color: number | Rgb) => string) => 
    (color: Rgb) => 
    (text: string | TemplateStringsArray) =>
        f(String(text), color)

export const b = $(strz, bold)
export const i = $(strz, italic)

export const c = base(rgb24)
export const bg = base(bgRgb24)