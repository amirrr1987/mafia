import { useQuery } from '@tanstack/vue-query'
import { computed, reactive, watchEffect } from 'vue'

export const useTable = (fetchFunction: (params: any) => Promise<any>) => {
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
  })

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['tableData', pagination.current, pagination.pageSize],
    queryFn: () => fetchFunction({ page: pagination.current, pageSize: pagination.pageSize }),
  })

  watchEffect(() => {
    if (data.value) {
      pagination.total = data.value.total
    }
  })

  return {
    dataSource: computed(() => data.value?.data || []),
    loading: isLoading,
    pagination,
    fetchData: refetch,
  }
}
