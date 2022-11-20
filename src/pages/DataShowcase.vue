<script setup>
import { usePagination } from 'vue-request'
import { ref, computed } from 'vue'
import axios from 'axios'

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    // width: '33%',
    ellipsis: true,
  },
  {
    title: '作者',
    dataIndex: 'author',
    // width: '33%',
    ellipsis: true,
  },
  {
    title: '发布时间',
    dataIndex: 'last_reply_at',
    // width: '33%',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'content',
    width: '100px',
    ellipsis: true,
  },
  {
    width: '0',
    ellipsis: true,
  },
]

const queryData = params =>
  axios.get('https://cnodejs.org/api/v1/topics?tab=good', { params })
// https://randomuser.me/api?noinfo
// https://cnodejs.org/api/v1/topics?tab=good

// https://cnodejs.org/api/v1/topics?tab=good&page=4&limit=20
// https://randomuser.me/api?noinfo&page=1&results=10

const {
  data: dataSource,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  formatResult: res => res.data.data,
  defaultParams: [
    {
      limit: 20,
    },
  ],
  pagination: {
    currentKey: 'page',
    pageSizeKey: 'limit',
  },
})

const pagination = computed(() => ({
  total: 1000,
  current: current.value,
  pageSize: pageSize.value,
}))

const handleTableChange = pag => {
  run({
    limit: pag.pageSize,
    page: pag?.current,
  })
}

// Modal
const modalTitle = ref('')
const modalHTML = ref('')
const visible = ref(false)
const showModal = (payload, event) => {
  const tr = event.composedPath().filter(node => node.nodeName === 'TR')[0]
  modalTitle.value = tr.firstElementChild.title
  modalHTML.value = payload
  visible.value = true
}
const handleOk = e => {
  console.log(e)
  visible.value = false
}
</script>

<template>
  <div class="modules">
    <a-table :scroll="{ y: 'calc(100vh - 200px)' }" :columns="columns" :data-source="dataSource"
      :pagination="pagination" :loading="loading" @change="handleTableChange">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'author'">
          {{ text.loginname }}
        </template>
        <template v-if="column.dataIndex === 'content'">
          <a-button @click="showModal(text, $event)" size="small">查看</a-button>
        </template>
      </template>
    </a-table>
  </div>
  <a-modal width="1200px" v-model:visible="visible" :title="modalTitle" :mask="false" @ok="handleOk">
    <div v-html="modalHTML"></div>
  </a-modal>
</template>

<style scoped>
.modules {
  height: 100%;
}

.ant-table-wrapper :deep(.ant-spin-nested-loading .ant-spin-container .ant-table) {
  height: calc(100% - 56px) !important;
}
</style>
