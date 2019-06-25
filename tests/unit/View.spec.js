import {shallowMount} from '@vue/test-utils'
import View from '@/views/View.vue'
import Api from '@/api'

describe('View.vue', () => {
    it('should set result to api name', async () => {
        const wrapper = shallowMount(View, {})
        Api.randomEntity = () => {
            return Promise.resolve({
                data: {
                    entries: [
                        {
                            API: "Api Name"
                        }
                    ]
                }
            })
        }

        await wrapper.vm.go()

        expect(wrapper.vm.$data.result).toEqual('Api Name')
    })
});
