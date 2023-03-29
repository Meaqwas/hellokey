#!/bin/sh
UUID=${UUID:-'d2c45a9f-c8cb-4e5e-8a28-08bbb5465f53'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
