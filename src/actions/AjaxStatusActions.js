/**
 * Created by Girish.Kumar on 22-05-2017.
 */


import * as types  from "./actionType"
export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}

