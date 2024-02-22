import { Dispatch, createContext } from 'react';
import { ActionTypes } from './formReducer';
import { MultiStepFormState } from './types';

export const FormContext = createContext<MultiStepFormState | null>(null);
export const FormDispatchContext = createContext<Dispatch<ActionTypes> | null>(null);
