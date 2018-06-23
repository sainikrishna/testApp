import * as Actions from './actionTypes';

export function loadData() {
    return {
      type: 'counter_increment'
    }
  }

export function counterDecrement(){
    return {
        type: 'counter_decrement'
    }
}