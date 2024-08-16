import { getClientToken, getTwilioToken } from "@libs/token";
import { Obj } from "@types";

export const getToken: Obj = getClientToken();

export const getTwilioAppToken: Obj = getTwilioToken();