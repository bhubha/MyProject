<template>
  <div class="register">
    <button><h1>CREATE</h1></button><br>
    <button><h1>VIEW</h1></button><br>
    <button><h1>DELETE</h1></button><br>
  </div>
</template>

<script>
export default {
  name: 'firstpage'
}
</script>

<style>
.register button {
  width: 320px;
  height: 40px;
  background-color: skyblue;
  border: 1px solid blue;
  color: white;
  padding-left: 30px;
  text-align: center;
  display: block;
  font-size: 8px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
}
</style>
