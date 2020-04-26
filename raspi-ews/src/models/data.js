const Data = {
  "os_info": {
    "hostname": "raspberrypi",
    "host_ip": "192.168.1.8",
    "type": "Linux",
    "platform": "linux",
    "uptime": 15094,
    "arch": "arm",
    "release": "4.19.58-v7+",
    "distribution": "Raspbian GNU/Linux 10 (buster)"
  },
  "cpu_info": {
    "cpu_temp": 44.5,
    "cpu_freq": 600,
    "core_voltage": 1.2,
    "core_num": 4,
    "load_1": 0,
    "load_5": 0,
    "load_15": 0,
    "processor": "ARMv7 Processor rev 4 (v7l)"
  },
  "hdd_info": [
    {
      "fs": "/dev/root",
      "type": "ext4",
      "total": 14674,
      "used": 1382,
      "avail": 12664,
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
    "free_mem": 155406336,
    "percent": 0.3439925291941684
  },
  "netstats": [
    {
      "interface": "wlan0",
      "ipaddr": "192.168.1.8",
      "rx": {
        "packets": "5127",
        "bytes": "866973",
        "error": "0",
        "dropped": "0"
      },
      "tx": {
        "packets": "3939",
        "bytes": "1007704",
        "error": "0",
        "dropped": "0"
      }
    }
  ],
  "mqtt_broker": {
    "online": true
  },
  "uptime": 15094,
  "localtime": "2020-01-27T12:34:56.680"
};

export default Data;