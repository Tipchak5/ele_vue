/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
	{
		path: '/',
		name: 'Example',
		redirect: { name: 'HelloIndex' },
		children: [
			{
				path: '/example',
				name: 'HelloIndex',
				meta: {
					title: '主页',
				},
				redirect: { name: 'home1' },
				component: () => import('@/views/Index.vue'),
				children: [
					{
						path: '/home1',
						name: 'home1',
						component: () => import('../views/home1/index.vue'),
					},
					{
						path: '/home2',
						name: 'home2',
						component: () => import('../views/home2/index.vue'),
					},
					{
						path: '/home3',
						name: 'home3',
						component: () => import('../views/home3/index.vue'),
					},
				],
			},
		],
	},
];

export default constantRouterMap;
