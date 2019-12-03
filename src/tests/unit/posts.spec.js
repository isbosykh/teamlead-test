import { createLocalVue, shallowMount } from "@vue/test-utils";
import Posts from "@/views/Posts";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe('test Main', () => {
    let store,
        actions;

    beforeEach(() => {
        actions = {
            'posts/updatePosts': jest.fn(),
        };
        store = new Vuex.Store({
            modules: {
                posts: {
                    actions
                }
            }
        })
    });

    it('переменная страниц для пагинации изменяется', () => {
        const wrapper = shallowMount(Posts, { store, localVue });
        wrapper.setData({page: 2});
        expect(wrapper.vm.$data.page).toBe(2)
    });

    it('current() in Posts проходит', () => {
        const wrapper = shallowMount(Posts, { store, localVue });

        expect(wrapper.vm.current());
    })
});