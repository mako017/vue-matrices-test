<template>
  <div class="root">
    <div class="textone">
      <div>
        <b>Thank you very much!</b>
        <br />
      </div>
    </div>
    <div class="texttwo">
      Your data has been saved successfully.
      <br />You can close the window.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.root {
  position: absolute;
  top: 0;
  left: 0;
}
.textone {
  font-size: 4vh;
  align-self: center;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(140, 188, 107);
  width: 100vw;
  height: 20vh;
  margin: 13vh 0vh auto 0vh;
}

.texttwo {
  font-size: 2vh;
  align-self: center;
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(217, 217, 217);
  width: 100vw;
  height: 7.3vh;
}
</style>