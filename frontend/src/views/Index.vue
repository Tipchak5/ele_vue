<template>
	<a-layout class="layout">
		<a-layout-header>
			<a-menu
				v-model:selectedKeys="selectedKeys"
				theme="dark"
				mode="horizontal"
				:style="{ lineHeight: '64px' }"
			>
				<a-menu-item key="home1" @click="navigateTo('home1')">nav 1</a-menu-item>
				<a-menu-item key="home2" @click="navigateTo('home2')">nav 2</a-menu-item>
				<a-menu-item key="home3" @click="navigateTo('home3')">nav 3</a-menu-item>
			</a-menu>
		</a-layout-header>

		<a-layout-content>
			<p class="text">ccc</p>
			<router-view style="width: 100%; height: 100%" />
		</a-layout-content>
	</a-layout>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectedKeys = ref(['home1']);

const navigateTo = (routeName) => {
	router.push(`/${routeName}`);
};
</script>

<style lang="less" scoped>
.site-layout-content {
	min-height: 280px;
	padding: 24px;
	background: #fff;
}

#components-layout-demo-top .logo {
	float: left;
	width: 120px;
	height: 31px;
	margin: 16px 24px 16px 0;
	background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
	float: right;
	margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
	background: #141414;
}

.ant-layout {
	height: 100%;
	width: 100%;
}

.layout {
	.text {
		color: pink;
		background-color: green;
	}
}
</style>
