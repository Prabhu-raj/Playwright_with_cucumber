// world.ts
import { Page, BrowserContext, Browser } from "@playwright/test";

export const browser: { instance?: Browser } = {};
export const context: { instance?: BrowserContext } = {};
export const page: { instance?: Page } = {};

    