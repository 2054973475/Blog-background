<template>
  <div class="update-password__container">
    <div class="update-password__ruleForm">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="旧密码" prop="oldPass">
          <el-input
            v-model="ruleForm.oldPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="newPass">
          <el-input
            v-model="ruleForm.newPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkNewPass">
          <el-input
            v-model="ruleForm.checkNewPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { updatePasswordApi } from '@/api/user';
export default {
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkNewPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPass: '',
        newPass: '',
        checkNewPass: ''
      },
      rules: {
        oldPass: [{ validator: validateOldPass, trigger: 'blur' }],
        newPass: [{ validator: validatePass, trigger: 'blur' }],
        checkNewPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const data = await updatePasswordApi(this.ruleForm);
          this.$notify({
            title: '成功',
            message: data.result.message,
            type: 'success',
            duration: 2000
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.update-password {
  &__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__ruleForm {
    margin-top: 200px;
    width: 500px !important;
  }
}
</style>
