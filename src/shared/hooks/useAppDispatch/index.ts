import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/_providers/reduxStore';

export const useAppDispatch: () => AppDispatch = useDispatch;
