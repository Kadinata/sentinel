const Data = {
  "message": "Hello from Pi 3A! 😃",
  "os_info": {
    "hostname": "raspberrypi",
    "host_ip": "192.168.1.4",
    "uptime": 209,
    "type": "Linux",
    "platform": "linux",
    "arch": "arm",
    "release": "4.19.58-v7+",
    "distribution": "Raspbian GNU/Linux 10 (buster)"
  },
  "cpu_info": {
    "cpu_temp": 39.2,
    "cpu_freq": 1400,
    "core_voltage": 1.35,
    "core_num": 4,
    "load_1": 0.201171875,
    "load_5": 0.142578125,
    "load_15": 0.0576171875,
    "processor": "ARMv7 Processor rev 4 (v7l)"
  },
  "hdd_info": [
    {
      "fs": "/dev/root",
      "type": "ext4",
      "total": 14674,
      "used": 1374,
      "avail": 12672,
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
    "free_mem": 210440192,
    "percent": 0.4658101835062015
  },
  "netstats": {
    "rx": {
      "packets": "309",
      "bytes": "254611",
      "error": "0",
      "dropped": "0"
    },
    "tx": {
      "packets": "267",
      "bytes": "31781",
      "error": "0",
      "dropped": "0"
    }
  }
};

export default Data;