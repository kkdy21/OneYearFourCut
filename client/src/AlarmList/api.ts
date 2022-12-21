import { jsonInstance } from "shared/utils/axios";
import { getParams } from "./types";
const apis = {
  getAlarmCheck:async () => {
    return await jsonInstance.get('/members/me/alarms');
  },
  getAlarmList: async (params : getParams) => {
    return await jsonInstance.get(`/members/me/alarms?filter=${params.filter}&page=${params.page}`);
  }
}

//test
//test
//test
//test
//test
//test
export default apis;