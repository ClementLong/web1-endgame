<template>
    <div class="audio" id="Audio">
        <img v-on:click="myAudioFunction" class="audio__img" id="m" src="@/assets/img/unmute.png"  name="unmute">
        <video class= "audio__video" id="myVideo" loop="true" autoplay="autoplay" muted>
            <source :src="video" type="video/mp4" >
        </video>
    </div>
</template>

<script>

export default {
  props: {
    video: String
  },
  methods: {
    myAudioFunction: function () {
      var m = document.getElementById("m").name;
      var vid = document.getElementById("myVideo");

      if (m == "mute") {
        document.getElementById("m").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMaSURBVHgBtZmPsdowDMaVXgdIJ6g7AWzQdIKywWMD2AA6AXkThE4CnYDHBMmbADZQJSIfIufEjuN8dzr+yV9+sRNHNhlEChELellS/JTXXIJ1p2gkrhTnLMvOEKFsTDJBMcCGYiswDR+c4lPeaxmKBbTwRuX+IdgGUorBKA7Y6kaxpzAj2i+lTS0e1Zj2PvONQLH5GiaKPcRrup/qtVKGN9ankGvWfs6lR1kHGCsxOEnPrSBS4lPhU7vO7ys5xmVUB0gDHoIlRErgLgJgr8GbI8+O0iXU+CCmBiLFbdVJGvmOrz3s5O3UJXTzDrc1mTisRt0EpuvtgNvL55V83vqM95AYrgvYhVM5tidzl3klxlF3q4JzXvBqdJxwkpOLR+UyZ60hDm7puxsVoBPOkWf0lxWTQxxcIXBHT97BB6dybzYvky8Y7p2ekaUj2UD7/O0b+rW03UL/AXn+2z8OSAI/IOduKPVbhu0Mf6L44XqIYzs/Mdy5x+/qOjEH3AfFMhDQ0At32q8H7dDwTrw2d3ZY0TEPetrWPOV8gbYkukJiqZ7j8moP4/WPomBAA233J1MCOFZDsbCADSRSIjhWQ5EzYHQZ1VVCOKsHYBLNAPcQA95houaCI90toIFIzQhnKBoG5Dv4O0RoRjgWT3+fX6GdA98GErmHfzvmWDbgx1s5AxyLq/m/9mHPcvYitoVkjcN68x1tzJNEqiNEu9DS1UNA452uSvC5OtsmBHx9/GLPgsYH12mP2Fm1TQCsURetGFCw4kAlHAIZCoiuglV+OGJPye+DC4EcAfjae+qHHB1Lv1C4LojDxwsox6qxb8nLF7qYr2LglE8hJ1uFAuJz2bkGj7ld+lUxcMrnZSE1BCj3AOeWoeYn1zBFQOp1MsdlICds60Ma6X2V6F0GBVBKmM5vBcZsHimD0vYkIqasG/WGaNiwDpitMdWG46sf99wWUkiG6ShnXMvdHbw1J+13AoVyAwaNyNhNdANtecU7+/y+gbZcu4J7E50LkELec1X0TnEcs4k+CrADW8jBFwLAof+G4GB4Xj5+xP4N8R/tkuffmZ5t4wAAAABJRU5ErkJggg==";
        document.getElementById("m").name = "unmute";
        vid.muted = true;
      }else {
        document.getElementById("m").src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALeSURBVHgBzVmBceIwEDx+UoA7eHWAO3h38HSAOwhfAXwFdiqAVEA6gK8gUAFKBdCB/g6vP4pHiiXZk/fO7OCxTqu1ZMknMaNEGGMK/smZP/CbgYIbU4Nn5nE2mx0pAbOYYDYlBh6ZK5jR0jjzDdc2FHNOjXllxf5ms5rGhBhjVqbBlblhqoj6OepcoLGNqd8nvoQpES9pIEQDWsP1rF6rMbypOrndYxiRGtoVxQICB/TcghIBnVfzjkWnvEQb+6gOQAUZgpwSYZm7oAd3zBdHnELMIVS4wlMpSoTV6KXVwSQ5eOJztFn1CZcYipJGNNdnEOULtL3sE65puLnX7gj0GURMjZ7MXIVbiCfN1o65zFEeYjCDRuUSTx5a6x06+B4wxCDi2tcss2/ee48SYJnb9cQFGUTs/Wsl1w+4VzCfPcHt91d59Eqpy9/XksbDE9rcPJgmK1HMF0+wvA+ywJ4cZZK1/GJzyRPLgx1zLd6kBwum5kZOnmApf+LyDX0RJNthc5ov82/UpERnmh7+MAsxqMg9fP8bmjlvDWqaHjQzE4PJadQX4G5w0hCDN5oubq1BRdODYmoxKDP4O00Psvy9yUIt683jJ4Ga+RMLpwvH0beRDSSbf75vwJE9OHsRmY69r3Bh2ddaZLKQQ7dob/zLHmKBhgWrgLhQg5sP2RVuXCkRlsk1jWPwIimgfSMbkrCGmExIWFW3oDYDUn5orHwmTVzKv/UV9m/9+k2WLpOBBivT2Q36xJNPE6CzwMNuQw2a0C2ved/6JZ8qQKfdq2wxOp9t3BViwzJz0+zO/F0dZ/ICOg1YMfsYYXniPURLGgD0Tu1aJ61X4ZA0OY11RGYGzG6Hrn0gOmzDZcY8cPyodx1DrxWVYdrhiUV8HTOJUH8NU8ZEHIjGHqIr/tlQc7Iv15qadO1M7kN0SUAKXEveKRvymrOf4CQ5ymDHbIHG5zAgtP+GEIp5SedOqX9D/AWQWgt7CGZhnQAAAABJRU5ErkJggg==";
        document.getElementById("m").name = "mute";
        vid.muted = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.audio {
  background-color: black;
  display: flex;
  flex-direction: column;
}

.audio__video{
  width: 100%;
  max-height: 800px;
}

.audio__img {
  width: 40px;
  height: 40px;
  margin: 20px 20px 20px auto;
}
</style>