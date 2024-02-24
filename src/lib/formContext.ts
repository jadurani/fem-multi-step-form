import { Dispatch, createContext } from 'react';
import { ActionTypes, initialState } from './formReducer';
import { MultiStepFormState } from './types';

export const FormContext = createContext<MultiStepFormState>(initialState);
export const FormDispatchContext = createContext<Dispatch<ActionTypes>>(() => {
  throw new Error('FormDispatchContext must be used within a FormProvider');
});
