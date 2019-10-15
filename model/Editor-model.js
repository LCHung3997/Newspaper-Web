var db = require('../utils/Database');

module.exports = {
    bbByidTV : id => {
        return db.load(`SELECT tv.*, bb.*, cm.* FROM thanhvien tv, baibao bb, chuyenmuc cm WHERE tv.QuanLiCM = cm.idChuyenMuc and cm.idChuyenMuc = bb.ChuyenMuc and idThanhVien = '${id}' and bb.TrangThai = 3`)
    },
    getNDById : id => {
        return db.load(`SELECT cm.*,tv.*, bb.* FROM thanhvien tv, baibao bb, chuyenmuc cm WHERE bb.ChuyenMuc = cm.idChuyenMuc and bb.TacGia = tv.idThanhVien and bb.idBaiBao = '${id}' and bb.Xoa = 0`)
    },
    getListXuLi : id => {
        return db.load(`SELECT tv.*, bb.*, cm.* ,tt.* FROM thanhvien tv, baibao bb, chuyenmuc cm , TrangThai tt WHERE tv.QuanLiCM = cm.idChuyenMuc and cm.idChuyenMuc = bb.ChuyenMuc and idThanhVien = '${id}' and (bb.TrangThai = 2 or bb.TrangThai = 4) and bb.TrangThai = tt.idTrangThai`)
    }
}