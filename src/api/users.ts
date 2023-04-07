//所有与用户相关的接口
import request from "@/utils/request";
import { type } from "os";
//用户登录-参数类型
type LoginInfo={
    username:string
    password:string
    radio:string
}
//用户登录-返回数据类型
type LoginResult={
    success:boolean
    state:number
    message:string
    content:string

}
//用户请求登录
export const login=(loginInfo:LoginInfo)=>{
    return request<LoginResult>({
        method:'POST',
        url:"front/user/login",
        data:`username=${loginInfo.username}&password=${loginInfo.password}`
        
    })
}
// 要求请求类型为：application/json
// 需要把数据拼接为：只需把数据对象放在这 例如 data:loginInfo

//获取用户信息
