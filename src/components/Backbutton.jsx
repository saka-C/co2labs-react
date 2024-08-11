const Backbutton = () => {
    function goBack() {
        window.history.back(); // Fungsi untuk kembali ke halaman sebelumnya
    }

    return (
        <button className="bg-primary-500 rounded-lg text-bgbase px-4 py-2" onClick={goBack}>
            Bring me back <i className='bx bx-left-arrow-alt'></i>
        </button>
    );
};

export default Backbutton;
