new Vue({
    el: '#app',
    data: {
        jobPosts: [],
        applyData: {
            displayName: '',
            subject: 'Marketing Planner',
            email: '',
            phone: '',
            message: 'test',
            ptJobApplyType: 'APPLICATION',
            isActive: false,
            ptJobPost: { id: 1 }
        },
    },
    mounted() {
        // Mengambil data job posts saat komponen di-mount
        this.fetchJobPosts();
    },
    methods: {
        fetchJobPosts() {
            // Mengambil data job posts dengan metode GET
            axios.get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth')
                .then(response => {
                    this.jobPosts = response.data;
                })
                .catch(error => {
                    console.error('Error fetching job posts:', error);
                });
        },
        applyForJob() {
            // Mengirim data aplikasi pekerjaan dengan metode POST
            axios.post('https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth', this.applyData)
                .then(response => {
                    console.log('Application successful:', response.data);
                    // Atau lakukan sesuatu setelah berhasil mendaftar
                })
                .catch(error => {
                    console.error('Error applying for job:', error);
                });
        }
    }
});
