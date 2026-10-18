# TaskFlow API

Node.js ve Express kullanilarak hazirlanmis gorev yonetimi REST API projesi.

## 1. Gerekenler
- Node.js (LTS surumu onerilir)
- Visual Studio Code
- Postman (API isteklerini test etmek icin)

Node.js'in kurulu oldugunu kontrol etmek icin terminalde:
```bash
node -v
npm -v
```
Surum numaralari gorunuyorsa kurulum tamamdir.

## 2. Projeyi acma
1. `TASKFLOW` klasorunu bilgisayarina cikart.
2. VS Code'u ac.
3. **File > Open Folder** seceneginden `TASKFLOW` klasorunu sec.
4. **Terminal > New Terminal** ile terminal ac.

## 3. Paketleri kurma
Terminalde proje klasorunun icinde oldugundan emin ol. Ardindan:
```bash
npm install
```
Bu komut Express gibi bagimliliklari `node_modules` klasorune indirir.

## 4. Sunucuyu baslatma
```bash
npm start
```
Terminalde `TaskFlow API http://localhost:3000 adresinde calisiyor.` mesaji gorunmelidir.
Sunucuyu durdurmak icin terminalde `Ctrl + C` tuslarina bas.

Gelisim sirasinda otomatik yeniden baslatma icin (desteklenen Node.js surumlerinde):
```bash
npm run dev
```

## 5. Hizli kontrol
Tarayicida `http://localhost:3000` adresini ac. JSON cevabi gorursen sunucu calisiyordur.
Gorevleri listelemek icin Postman'de `GET http://localhost:3000/api/tasks` istegi gonder.

## 6. Endpoint listesi

| Islem | Method | URL | Beklenen sonuc |
|---|---|---|---|
| Tum gorevleri getir | GET | `/api/tasks` | 200 OK |
| Bir gorevin detayini getir | GET | `/api/tasks/1` | 200 OK |
| Gorev olustur | POST | `/api/tasks` | 201 Created |
| Gorev guncelle | PUT | `/api/tasks/1` | 200 OK |
| Gorev sil | DELETE | `/api/tasks/1` | 200 OK |

Tam adreslerde `http://localhost:3000` on ekini kullan.

### Yeni gorev ornegi
POST isteginde **Body > raw > JSON** sec ve sunu gonder:
```json
{
  "title": "Sunum hazirla",
  "description": "Proje sunumunun ilk taslagini olustur.",
  "priority": "high",
  "assignee": "Nilsu",
  "status": "pending"
}
```

Gecerli `priority` degerleri: `low`, `medium`, `high`.
Gecerli `status` degerleri: `pending`, `in-progress`, `completed`.
`title` zorunludur.

### Guncelleme ornegi
PUT `http://localhost:3000/api/tasks/1` adresine:
```json
{
  "status": "completed",
  "priority": "low"
}
```
gonderebilirsin. Gondermedigin alanlar ayni kalir.

## 7. Dosyalar ne ise yariyor?
- `server.js`: Express uygulamasini kurar, middleware ve route'lari baglar, sunucuyu baslatir.
- `routes/taskRoutes.js`: URL ve HTTP methodlarini ilgili fonksiyonlara yonlendirir.
- `controllers/taskController.js`: Listeleme, ekleme, guncelleme ve silme mantigini icerir.
- `middleware/requestLogger.js`: Her istegin zamanini, methodunu ve adresini terminale yazar.
- `data/tasks.js`: Ornek gorevleri bellekte tutar.
- `package.json`: Proje bilgileri, calistirma komutlari ve bagimliliklari tanimlar.

## 8. Onemli not
Bu egitim projesi gorevleri bir veritabanina kaydetmez; veriler uygulama calisirken bellekte tutulur. Sunucu yeniden baslatilinca eklenen/guncellenen/silinen veriler ilk ornek duruma doner. Yonergede veritabani zorunlu tutulmadigi icin temel CRUD ve routing kapsaminda basit tutulmustur.

## 9. Teslim oncesi kontrol listesi
- [ ] `npm install` hatasiz tamamlandi.
- [ ] `npm start` ile sunucu aciliyor.
- [ ] GET tum gorevler istegi calisiyor.
- [ ] GET tek gorev istegi calisiyor.
- [ ] POST yeni gorev olusturuyor.
- [ ] PUT gorevi guncelliyor.
- [ ] DELETE gorevi siliyor.
- [ ] Postman'de her endpoint icin ekran goruntusu alindi.
- [ ] `Proje-Tanitimi.md` dosyasi incelendi ve gerekiyorsa kendi bilgilerinle duzenlendi.
- [ ] Proje GitHub'a yuklendi ve egitmenin istedigi sekilde paylasildi.

## 10. GitHub'a yukleme (istege gore)
Git kuruluysa proje klasorundeki terminalde:
```bash
git init
git add .
git commit -m "TaskFlow API projesini ekle"
git branch -M main
git remote add origin REPO_URLINI_BURAYA_YAZ
git push -u origin main
```
`REPO_URLINI_BURAYA_YAZ` yerine kendi GitHub repository adresini yaz. Gercek adresini eklemeden bu komutu calistirma.
