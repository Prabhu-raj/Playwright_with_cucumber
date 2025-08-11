import { Page, BrowserContext, Browser, Expect } from "@playwright/test";

export const browser: { instance?: Browser } = {};
export const context: { instance?: BrowserContext } = {};
export const page: { instance?: Page } = {};
export const expect: {instance?: Expect } = {};

    