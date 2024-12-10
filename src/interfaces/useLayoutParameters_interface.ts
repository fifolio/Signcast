import { LayoutParametersTypes } from '@/types/LayoutParametersTypes';

export interface useLayoutParameters_interface {
  layoutParameters: LayoutParametersTypes;  
  setLayoutParameters: (state: Partial<LayoutParametersTypes>) => void; 
}
