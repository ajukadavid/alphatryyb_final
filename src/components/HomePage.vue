<template>
  <Renderer ref="renderer" resize :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ x: 0, y: 0, z: 100 }" />
    <Scene background="#000000">
      <NoisyImage
          src="https://lh3.googleusercontent.com/z0NbbgCX8n-u3WGWzzdIwX4CGuXMXIThOnz0ffRIMO2fbb8N662Qez8e2jN8rtOgqRD7gJLMo8jwZP0bj_VlheRvtgGID4dK-lrFLWXC6a2GfB3fy90_uj3JJLwE33LJmbkoZhih0URNm_CCE3d34qeajce0QEl0gsW98yf4osIBMhrsdP1VZE0jzjG1hS8nsFidjGV6VygwQEGSqpYgEacVU6gv-IUL0qe4ctVmjEsbMeLq1zdiAftOyv9pJQGUM_bp-XVbrqITtTjNS0LHNhYyO4PSRzt3jXSYBFEyazx1xkLofvqhVE-u7K-wRTadjI3OAsSvFiGKqC3RCQ7tNtFpFavOLvb8LowZKD-Usx536Wb_cim5licDs848skZI6_PMyLyqfQEB-WT35GtmQySG15B388wK9veu8iLY-kyABdywe8Zp3zBQfmRDqTWXxwpMeH0Rfywo2jDvWIRnH25FCpgG6ByNYZRXVLH-b1QlxDoRTNUuxNDZLzArsxsdDeih0aKd36Rio8LTiRnoiFRCB2IoZo7-GmX2XCT9p25vJhz7-2OTkR9_56Bt8onRVyN6SFAAgmForYu2fHOCVWaFoh3bGuRXdvTusoz7u7wdYpfz6_Zrj3OIPyzzB41TE-xAMBkK2eCe8s_Iuzs6bUC7da4LwJ0A1rry5AuKlIu4aNc1WL9CLnjdcanGZi7SkiNhEXsWbSrNlZMTHMULoVrkCvw7YmNWZMFKFg2Idm7yXITEHA3lZMgA8Mg=w274-h437-no?authuser=0"
          :width="800"
          :time-coef="0.001"
          :noise-coef="2"
          :z-coef="5"
          :disp-coef="0.015"
          :rotation="{ x: -Math.PI / 6 }"
      />
    </Scene>
  </Renderer>
</template>

<script>
import { Camera, Renderer, Scene } from 'troisjs';
import NoisyImage from 'troisjs/src/components/noisy/NoisyImage.js';
export default {
  components: { Camera, NoisyImage, Renderer, Scene },
};
</script>
