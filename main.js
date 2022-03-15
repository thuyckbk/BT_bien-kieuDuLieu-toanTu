function kichThuocHinhTron(){
    let r = prompt('Moi ban nhap ban kinh hinh tron');
    const PI = 3.14;
    let C = 2*r*PI;
    document.write('chu vi hinh tron la '+C);
    console.log(C);
    document.write('<br>');
    let S = r*r*PI;
    document.write('Dien tich hinh tron la: '+S);
    }
    function hienThiNgayThang(){
    let y = prompt('Moi ban nhap nam');
    let m = prompt('Moi ban nhap thang');
    let d = prompt('Moi ban nhap ngay');
    document.write(d+'-'+m+'-'+y);
    }
    function tinhLaiNganHang(){
            let a = prompt('Moi ban nhap so tien');
            let x = prompt('Moi ban nhap lai suat ngan hang');
            let n = prompt('Moi ban nhap so nam');
            let laiSuat = a/100*x;
            let tongTien = laiSuat*n+a*1;
            document.write('So tien lai nhan duoc la: ' + laiSuat);
            document.write('<br>');
            document.write('Tong so tien ca goc va lai la: '+tongTien);
    }

    function inNoiDungBucThu(){
            let name = prompt('Moi ban nhap ten');
            let address = prompt('Moi ban nhap dia chi');
            let dd = prompt('Moi ban nhap so ngay');
            let mm = prompt('Moi ban nhap so thang');
            let yy = prompt('Moi ban nhap so nam');
            document.write(name + ' thương nhớ,');
            document.write('<br>');
            document.write('Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.');
            document.write('<br>');
            document.write('Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.');
            document.write('<br>');
            document.write('Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.');
            document.write('<br>');
            document.write(address+ ', ngày '+dd+' tháng ' +mm+' năm '+yy +'.');

    }
