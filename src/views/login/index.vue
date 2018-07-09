<template>
  <div class="container flex-center">
    <div class="login-box">
      <ul class="flex-center tab-wrap">
        <li
          v-for="(tab, index) of tabList"
          :key="tab"
          :class="[index === activeIndex ? 'active' : '']"
          @click="toggleTab(index)">
          {{ tab }}
        </li>
      </ul>
      <div class="input flex-center">
        <el-input
          :placeholder="inputConfig.accountPlaceholder"
          :value="isSmsLogin ? phoneNumber : userName"
          @input="setInputInfo(isSmsLogin ? 'phoneNumber' : 'userName', $event)" clearable>
          <svg class="input-icon el-input__icon" aria-hidden="true" slot="prefix">
            <use :xlink:href="`#i-${inputConfig.accountInputIcon}`" />
          </svg>
        </el-input>
      </div>
      <div class="input flex-center">
        <el-input
          :placeholder="inputConfig.passwordPlaceholder" :type="isSmsLogin ? 'text' : 'password'"
          :value="isSmsLogin ? authCode : password"
          @input="setInputInfo(isSmsLogin ? 'authCode' : 'password', $event)"
          clearable>
          <svg class="input-icon el-input__icon" aria-hidden="true" slot="prefix">
            <use xlink:href="#i-password" />
          </svg>
        </el-input>
        <el-button plain class="get-auth-code-button" v-if="isSmsLogin">获取验证码</el-button>
      </div>
      <p class="error-tip flex-center">
        <svg class="error-tip-icon" aria-hidden="true">
          <use xlink:href="#i-warning" />
        </svg>
        {{ errorTip }}
      </p>
      <el-checkbox class="remember-me">记住我</el-checkbox>
      <el-button type="primary" plain class="login-in-button">登录</el-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
 @import './style.scss'
</style>
