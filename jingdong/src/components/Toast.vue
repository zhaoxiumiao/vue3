<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
    props: ['message']
}
export const useToastEffect =() =>{
    const toasData = reactive({
        show: false,
        toastMessage: ''
    })
    const showToast = (message) =>{
        toasData.show = true
        toasData.toastMessage = message
        setTimeout(()=>{
            toasData.show = false
            toasData.toastMessage = ''
        },2000)
    }
    const {show, toastMessage} = toRefs(toasData)
    return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: .1rem;
    background: rgba(0, 0, 0, .35);
    border-radius: .05rem;
    color: #FFF;
}
</style>