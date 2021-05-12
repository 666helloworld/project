package com.example.itcast_sms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;

import java.util.Map;

public class SmsListener {

    @Autowired
    private SmsUtil smsUtil;

    @JmsListener(destination = "sms")
    public void sendSms(Map<String,String> map){
        String mobile = map.get("mobile");
        String template_code = map.get("template_code");
        String sign_name = map.get("sign_name");
        String param = map.get("param");
        System.out.println(mobile);
        System.out.println(template_code);
        System.out.println(sign_name);
        System.out.println(param);
        //调用短信工具类  发送短信
//        smsUtil.sendSms()
    }
}
