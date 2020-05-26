const Data = {
  "os_info": {
    "hostname": "raspberrypi",
    "host_ip": "192.168.1.6",
    "type": "Linux",
    "platform": "linux",
    "arch": "arm",
    "release": "4.19.58-v7+",
    "distribution": "Raspbian GNU/Linux 10 (buster)"
  },
  "cpu_info": {
    "cpu_temp": 49.4,
    "cpu_freq": 1400,
    "core_voltage": 1.35,
    "core_num": 4,
    "load_1": 0,
    "load_5": 0,
    "load_15": 0,
    "processor": "ARMv7 Processor rev 4 (v7l)"
  },
  "cpu_usage": {
    "interval": 10010,
    "timestamp": 1590452844878,
    "usages": [
      [
        0,
        100000
      ],
      [
        0,
        100100
      ],
      [
        0,
        100100
      ],
      [
        100,
        100100
      ]
    ]
  },
  "hdd_info": [
    {
      "fs": "/dev/root",
      "type": "ext4",
      "total": 14674,
      "used": 1387,
      "avail": 12660,
      "percent": 10,
      "mount": "/"
    },
    {
      "fs": "/dev/mmcblk0p1",
      "type": "vfat",
      "total": 253,
      "used": 40,
      "avail": 214,
      "percent": 16,
      "mount": "/boot"
    }
  ],
  "mem_info": {
    "total_mem": 451772416,
    "free_mem": 207101952,
    "percent": 0.4584209762820048
  },
  "netstats": [
    {
      "interface": "wlan0",
      "ipaddr": "192.168.1.6",
      "rx": {
        "packets": "2569",
        "bytes": "518068",
        "error": "0",
        "dropped": "0"
      },
      "tx": {
        "packets": "1822",
        "bytes": "861357",
        "error": "0",
        "dropped": "0"
      }
    }
  ],
  "uptime": 18398,
  "localtime": "2020-05-26T01:27:32.370",
  "mqtt_broker": {
    "online": true
  }
};

export default Data;