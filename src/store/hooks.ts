import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./store";

type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppThunkDispatch = useDispatch.withTypes<AppThunkDispatch>();
export const useTypedAppSelector = useSelector.withTypes<TypedUseSelectorHook<RootState>>();