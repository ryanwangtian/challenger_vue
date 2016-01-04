<template>
    <div class="loader-container">
        <div class="loading-anim">
          <div class="circle no1"></div>
          <div class="circle no2"></div>
          <div class="circle no3"></div>
          <div class="circle no4"></div>
        </div>
      </div>
</template>

<script>
    module.exports = {
    };
</script>

<style lang="less">
.loader-container {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 10000;
  background: rgba(7, 47, 79, 0.35);
  display: block;
}

.loading-anim{
  position: relative;
}

.loader-container > .loading-anim {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
}

.loading-anim > .circle {
  position: absolute;
  width: 10px;
  height: 10px;
  left: -5px;
  top: -5px;
  border-radius: 50%;
}

.loading-anim > .circle.no1 {
  -moz-animation              : loadingMoving1 2600ms infinite linear 0ms;
  -webkit-animation           : loadingMoving1 2600ms infinite linear 0ms;
  -ms-animation               : loadingMoving1 2600ms infinite linear 0ms;
  -o-animation                : loadingMoving1 2600ms infinite linear 0ms;
  animation                   : loadingMoving1 2600ms infinite linear 0ms;
  background-color            : #4db19e;
}
.loading-anim > .circle.no2 {
  -moz-animation              : loadingMoving2 2600ms infinite linear 0ms;
  -webkit-animation           : loadingMoving2 2600ms infinite linear 0ms;
  -ms-animation               : loadingMoving2 2600ms infinite linear 0ms;
  -o-animation                : loadingMoving2 2600ms infinite linear 0ms;
  animation                   : loadingMoving2 2600ms infinite linear 0ms;
  background-color            : #eeb269;
}
.loading-anim > .circle.no3 {
  -moz-animation              : loadingMoving3 2600ms infinite linear 0ms;
  -webkit-animation           : loadingMoving3 2600ms infinite linear 0ms;
  -ms-animation               : loadingMoving3 2600ms infinite linear 0ms;
  -o-animation                : loadingMoving3 2600ms infinite linear 0ms;
  animation                   : loadingMoving3 2600ms infinite linear 0ms;
  background-color            : #dc5753;
}
.loading-anim > .circle.no4 {
  -moz-animation              : loadingMoving4 2600ms infinite linear 0ms;
  -webkit-animation           : loadingMoving4 2600ms infinite linear 0ms;
  -ms-animation               : loadingMoving4 2600ms infinite linear 0ms;
  -o-animation                : loadingMoving4 2600ms infinite linear 0ms;
  animation                   : loadingMoving4 2600ms infinite linear 0ms;
  background-color            : #354d59;
}

@keyframes loadingMoving1 {
  0%    { transform: translate(-8px, -8px); }
  12.5% { transform: translate(8px, -8px); }
  25%   { transform: translate(8px, -8px); }
  37.5% { transform: translate(8px, 8px); }
  50%   { transform: translate(8px, 8px); }
  62.5% { transform: translate(-8px, 8px); }
  75%   { transform: translate(-8px, 8px); }
  87.5% { transform: translate(-8px, -8px); }
  100%  { transform: translate(-8px, -8px); }
}

@keyframes loadingMoving2 {
  0%    { transform: translate(-8px, 8px); }
  12.5% { transform: translate(-8px, -8px); }
  25%   { transform: translate(-8px, -8px); }
  37.5% { transform: translate(8px, -8px); }
  50%   { transform: translate(8px, -8px); }
  62.5% { transform: translate(8px, 8px); }
  75%   { transform: translate(8px, 8px); }
  87.5% { transform: translate(-8px, 8px); }
  100%  { transform: translate(-8px, 8px); }
}

@keyframes loadingMoving3 {
  0%    { transform: translate(8px, 8px); }
  12.5% { transform: translate(-8px, 8px); }
  25%   { transform: translate(-8px, 8px); }
  37.5% { transform: translate(-8px, -8px); }
  50%   { transform: translate(-8px, -8px); }
  62.5% { transform: translate(8px, -8px); }
  75%   { transform: translate(8px, -8px); }
  87.5% { transform: translate(8px, 8px); }
  100%  { transform: translate(8px, 8px); }
}

@keyframes loadingMoving4 {
  0%    { transform: translate(8px, -8px); }
  12.5% { transform: translate(8px, 8px); }
  25%   { transform: translate(8px, 8px); }
  37.5% { transform: translate(-8px, 8px); }
  50%   { transform: translate(-8px, 8px); }
  62.5% { transform: translate(-8px, -8px); }
  75%   { transform: translate(-8px, -8px); }
  87.5% { transform: translate(8px, -8px); }
  100%  { transform: translate(8px, -8px); }
}


@-moz-keyframes loadingMoving1 {
  0%    { -moz-transform: translate(-8px, -8px); }
  12.5% { -moz-transform: translate(8px, -8px); }
  25%   { -moz-transform: translate(8px, -8px); }
  37.5% { -moz-transform: translate(8px, 8px); }
  50%   { -moz-transform: translate(8px, 8px); }
  62.5% { -moz-transform: translate(-8px, 8px); }
  75%   { -moz-transform: translate(-8px, 8px); }
  87.5% { -moz-transform: translate(-8px, -8px); }
  100%  { -moz-transform: translate(-8px, -8px); }
}

@-moz-keyframes loadingMoving2 {
  0%    { -moz-transform: translate(-8px, 8px); }
  12.5% { -moz-transform: translate(-8px, -8px); }
  25%   { -moz-transform: translate(-8px, -8px); }
  37.5% { -moz-transform: translate(8px, -8px); }
  50%   { -moz-transform: translate(8px, -8px); }
  62.5% { -moz-transform: translate(8px, 8px); }
  75%   { -moz-transform: translate(8px, 8px); }
  87.5% { -moz-transform: translate(-8px, 8px); }
  100%  { -moz-transform: translate(-8px, 8px); }
}

@-moz-keyframes loadingMoving3 {
  0%    { -moz-transform: translate(8px, 8px); }
  12.5% { -moz-transform: translate(-8px, 8px); }
  25%   { -moz-transform: translate(-8px, 8px); }
  37.5% { -moz-transform: translate(-8px, -8px); }
  50%   { -moz-transform: translate(-8px, -8px); }
  62.5% { -moz-transform: translate(8px, -8px); }
  75%   { -moz-transform: translate(8px, -8px); }
  87.5% { -moz-transform: translate(8px, 8px); }
  100%  { -moz-transform: translate(8px, 8px); }
}

@-moz-keyframes loadingMoving4 {
  0%    { -moz-transform: translate(8px, -8px); }
  12.5% { -moz-transform: translate(8px, 8px); }
  25%   { -moz-transform: translate(8px, 8px); }
  37.5% { -moz-transform: translate(-8px, 8px); }
  50%   { -moz-transform: translate(-8px, 8px); }
  62.5% { -moz-transform: translate(-8px, -8px); }
  75%   { -moz-transform: translate(-8px, -8px); }
  87.5% { -moz-transform: translate(8px, -8px); }
  100%  { -moz-transform: translate(8px, -8px); }
}


@-webkit-keyframes loadingMoving1 {
  0%    { -webkit-transform: translate(-8px, -8px); }
  12.5% { -webkit-transform: translate(8px, -8px); }
  25%   { -webkit-transform: translate(8px, -8px); }
  37.5% { -webkit-transform: translate(8px, 8px); }
  50%   { -webkit-transform: translate(8px, 8px); }
  62.5% { -webkit-transform: translate(-8px, 8px); }
  75%   { -webkit-transform: translate(-8px, 8px); }
  87.5% { -webkit-transform: translate(-8px, -8px); }
  100%  { -webkit-transform: translate(-8px, -8px); }
}

@-webkit-keyframes loadingMoving2 {
  0%    { -webkit-transform: translate(-8px, 8px); }
  12.5% { -webkit-transform: translate(-8px, -8px); }
  25%   { -webkit-transform: translate(-8px, -8px); }
  37.5% { -webkit-transform: translate(8px, -8px); }
  50%   { -webkit-transform: translate(8px, -8px); }
  62.5% { -webkit-transform: translate(8px, 8px); }
  75%   { -webkit-transform: translate(8px, 8px); }
  87.5% { -webkit-transform: translate(-8px, 8px); }
  100%  { -webkit-transform: translate(-8px, 8px); }
}

@-webkit-keyframes loadingMoving3 {
  0%    { -webkit-transform: translate(8px, 8px); }
  12.5% { -webkit-transform: translate(-8px, 8px); }
  25%   { -webkit-transform: translate(-8px, 8px); }
  37.5% { -webkit-transform: translate(-8px, -8px); }
  50%   { -webkit-transform: translate(-8px, -8px); }
  62.5% { -webkit-transform: translate(8px, -8px); }
  75%   { -webkit-transform: translate(8px, -8px); }
  87.5% { -webkit-transform: translate(8px, 8px); }
  100%  { -webkit-transform: translate(8px, 8px); }
}

@-webkit-keyframes loadingMoving4 {
  0%    { -webkit-transform: translate(8px, -8px); }
  12.5% { -webkit-transform: translate(8px, 8px); }
  25%   { -webkit-transform: translate(8px, 8px); }
  37.5% { -webkit-transform: translate(-8px, 8px); }
  50%   { -webkit-transform: translate(-8px, 8px); }
  62.5% { -webkit-transform: translate(-8px, -8px); }
  75%   { -webkit-transform: translate(-8px, -8px); }
  87.5% { -webkit-transform: translate(8px, -8px); }
  100%  { -webkit-transform: translate(8px, -8px); }
}
</style>

