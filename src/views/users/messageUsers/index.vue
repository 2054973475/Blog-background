<template>
  <div class="message-users__container">
    <div class="message-users__header" />
    <el-table :data="messageUsersForm" border style="width: 100%">
      <el-table-column type="index" />
      <el-table-column prop="name" label="用户名" width="180" />
      <el-table-column prop="email" label="用户邮箱" />
      <el-table-column
        prop="lastMessageTime"
        label="用户最后留言时间"
        sortable
      />
      <el-table-column
        prop="messagesNumber"
        label="用户留言数"
        width="180"
        sortable
      />
      <el-table-column prop="identity" label="用户身份" width="180" />
      <el-table-column label="操作" width="145">
        <template slot-scope="scope">
          <div class="message-users__setting">
            <el-popconfirm
              title="是否要删除该留言用户"
              icon-color="red"
              @onConfirm="handleDelete(scope.row)"
            >
              <el-button
                slot="reference"
                size="mini"
                type="danger"
              >删除</el-button>
            </el-popconfirm>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getLeavingMessageUser, deleteLeavingMessageUser } from '@/api/leavingmessage';
export default {
  data() {
    return {
      messageUsersForm: [
        {
          name: 'admin',
          email: '',
          messagesNumber: '',
          lastMessageTime: '',
          identity: ''
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const { result } = await getLeavingMessageUser();
      this.messageUsersForm = result.map((item) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        messagesNumber: item.messagesnumber,
        identity: item.identity ? '作者' : '游客',
        lastMessageTime: item.lastmessagetime
      }));
    },
    async handleDelete(value) {
      const data = await deleteLeavingMessageUser({ id: value.id });
      this.$notify({
        title: '成功',
        message: data.message,
        type: 'success',
        duration: 2000
      });
      this.init();
    }
  }
};
</script>
<style lang="scss" scoped>
.message-users {
  &__container {
    padding: 20px;
  }
  &__header {
    margin-bottom: 20px;
  }
  &__setting {
    display: flex;
    justify-content: center;
  }
}
</style>
