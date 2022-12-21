<template>
  <div>
    <svg viewBox="0 0 10 10" class="svg-5">
      <path d="M2,2 L8,2 L2,5 L8,5 L2,8 L8,8" />
    </svg>
  </div>
</template>

<style>
  .svg-5:hover path {
    d: path("M3,3 L8,3 L2,5 L8,5 L3,7 L7,7");
  }
  svg {
    width: 30%;
    height: 30%;
    background: #eee;
    margin-bottom: 5%;
  }
  svg polyline,
  svg line,
  svg path {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: 0.2s;
  }
</style>