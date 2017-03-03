import { Dimensions } from 'react-native';
import { GAME_SIZE } from './constants';

export const SIZE = Dimensions.get('window').width / (GAME_SIZE + 1);
