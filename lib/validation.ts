import {z} from "zod";
export const pollSchema=z.object({optionId:z.enum(["buy","commission","updates","other"]),customModel:z.string().max(200).optional(),confirmed:z.literal(true)}).refine(v=>v.optionId!=="other"||!!v.customModel?.trim(),{message:"Please describe your preferred model."});
export const interestSchema=z.object({email:z.string().email().max(160),name:z.string().max(80).optional(),preferredModel:z.string().min(2).max(120),contactHandle:z.string().max(100).optional(),consent:z.literal(true)});
export const questionSchema=z.object({displayName:z.string().max(60).optional(),question:z.string().min(10).max(500),website:z.string().max(0).optional()});
