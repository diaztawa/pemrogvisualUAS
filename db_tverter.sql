-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Jun 2020 pada 15.36
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tverter`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_temperature`
--

CREATE TABLE `tb_temperature` (
  `No` int(11) NOT NULL,
  `temp1` varchar(25) NOT NULL,
  `value` int(11) NOT NULL,
  `temp2` varchar(25) NOT NULL,
  `result` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_temperature`
--

INSERT INTO `tb_temperature` (`No`, `temp1`, `value`, `temp2`, `result`) VALUES
(11, '1', 20, '2', 16),
(12, '2', 21, '3', 79),
(13, '3', 21, '1', -6);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_temperature`
--
ALTER TABLE `tb_temperature`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_temperature`
--
ALTER TABLE `tb_temperature`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
