<template>
  <div class="p-4">
    <List class="min-h-[50vh]">
      <ListItem
        v-for="(user, index) in mafiaStore.userList"
        :key="index"
        class="!flex items-center"
      >
        {{ index + 1 }} -
        {{ user }}

        <Popconfirm
          title="آیا مطمئن هستید؟"
          ok-text="بله"
          cancel-text="خیر"
          @confirm="confirm(user)"
          @cancel="cancel"
        >
          <AzButton type="primary" danger shape="circle" icon="tabler:trash"></AzButton>
        </Popconfirm>
      </ListItem>
    </List>
    <Form layout="vertical">
      <FormItem label="نام">
        <Input v-model:value="newUser" placeholder="نام بازیکن را وارد کنید.." @keyup.enter="addUser(newUser)" />
      </FormItem>
      <AzButton @click="addUser(newUser)" icon="tabler:plus" block />
    </Form>
  </div>
</template>
<script setup lang="ts">
import AzButton from '@/components/AzButton.vue'
import { useMafiaStore } from '@/stores/mafia.store'
import { List, ListItem, Input, Form, FormItem, Popconfirm, message } from 'ant-design-vue/es'
import RadioGroupIcon from '@/components/RadioGroupIcon.vue'
import { ref } from 'vue'
const mafiaStore = useMafiaStore()

const newUser = ref('')

const addUser = (user: string) => {
  if (user.length < 1) return
  mafiaStore.addUser(user)
  newUser.value = ''
}

const confirm = (user: string) => {
  mafiaStore.removeUser(user)
  message.success(`${user} از لیست حذف شد`)
}

const cancel = () => {}
</script>
