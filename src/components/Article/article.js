import Article1 from 'assets/img/article1.jpeg';
import Article2 from 'assets/img/article2.jpeg';
import Article3 from 'assets/img/article3.jpeg';
import moment from 'moment';

const article = [
  {
    title: 'Sekolah Daring (Online), Anak-anak di Daerah Pelosok Bagaimana?',
    image: Article1,
    description:
      'Pandemi Covid-19 secara langsung memberikan pengaruh untuk anak - anak dipelosok Bali karena adanya keterbatasan akses dan media dukung untuk dapat mengikuti pembelajaran dari rumah secara daring',
    date: moment('19-01-2022', 'DD-MM-YYYY').format('DD MMMM YYYY'),
  },
  {
    title:
      'Mengenal Komunitas Jejak Literasi Bali "BERSAMA MENGABDI UNTUK NEGERI',
    image: Article2,
    description:
      'Untuk berbagi dengan orang lain, kita tidak perlu memiliki alasan, cukup membantu sesuai kemampuan kita. Terpenting adalah kita punya jiwa berbagi dengan orang lain',
    date: moment('19-01-2022', 'DD-MM-YYYY').format('DD MMMM YYYY'),
  },
  {
    title:
      'KREDIBALI : Les Belajar Bahasa Inggris & Bayar dengan Sampah Plastik di Desa Pemuteran',
    image: Article3,
    description:
      'Pandemi Covid-19 memang mengubah banyak hal dari kebiasaan kita sebelumnya, baik dari aktivitas bekerja, sekolah, hangout bareng temen dan lainnya. Semua kebiasaan yang biasa kita lakukan sebelumnya mungkin sudah sangat jarang kita lakukan saat ini atau bahkan bisa dilakukan namun tetap dibatasi dengan berbagai protokol kesehatan, demi kebaikan bersama. Larangan untuk berkerumun dan membatasi kegiatan selalu disampaikan oleh Pemerintah Pusat/Daerah untuk mengajak setiap orang memperhatikan kondisi pandemi dan tidak menambah dampak yang lebih buruk kedepannya. Namun bagaimana dengan masyarakat sendiri? Apakah bisa mengubah kebiasaan dengan secepat pandemi menyerang kita semua? Mungkin jawabannya sangat tergantung dengan individu yang bersangkutan, belum ada jawaban pasti apakah bisa atau tidak.',
    date: moment('19-01-2022', 'DD-MM-YYYY').format('DD MMMM YYYY'),
  },
];

export default article;
