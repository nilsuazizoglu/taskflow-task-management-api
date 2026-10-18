# TaskFlow — Proje Tanıtımı

## Projenin amacı
TaskFlow, bir yazılım ekibinin görevlerini oluşturmak, sorumlulara atamak ve görev durumlarını takip etmek için geliştirilen temel bir REST API projesidir. Proje, Node.js ve Express kullanarak backend geliştirme, routing, middleware ve CRUD işlemlerini uygulamalı biçimde göstermeyi amaçlar.

## Senaryo
Bir yazılım şirketinin ekip üyeleri farklı görevler üzerinde çalışmaktadır. Görevlerin başlığı, açıklaması, önceliği, sorumlusu ve durumu tek bir API üzerinden yönetilir. İstemci uygulama, HTTP istekleri göndererek görevleri listeleyebilir, yeni görev ekleyebilir, var olan bir görevin bilgilerini değiştirebilir veya görevi silebilir.

## Temel özellikler
- Görevleri listeleme ve ID ile tek bir görevin detayını görüntüleme
- Yeni görev oluşturma
- Görev bilgilerini güncelleme
- Görev silme
- Her isteği method, URL ve zaman bilgisiyle terminale yazan logger middleware'i
- Eksik başlık, geçersiz öncelik ve geçersiz durum için temel hata kontrolleri

## Kullanılan teknolojiler
- Node.js: JavaScript kodunu sunucu tarafında çalıştırır.
- Express.js: HTTP isteklerini ve endpoint'leri yönetir.
- REST API: Kaynaklara HTTP methodlarıyla erişilmesini sağlar.
- Postman: Endpoint'leri elle test etmek için kullanılır.

## Veri modeli
Her görev şu alanları içerir:
- `id`: Görevin benzersiz numarası
- `title`: Görevin başlığı
- `description`: Açıklama
- `priority`: `low`, `medium` veya `high`
- `assignee`: Görevden sorumlu kişi
- `status`: `pending`, `in-progress` veya `completed`
- `createdAt`: Oluşturulma zamanı

## API özeti
- `GET /api/tasks`: bütün görevleri listeler.
- `GET /api/tasks/:id`: ID ile tek görev getirir.
- `POST /api/tasks`: yeni görev oluşturur.
- `PUT /api/tasks/:id`: görev alanlarını günceller.
- `DELETE /api/tasks/:id`: görevi siler.

## Kapsam ve sınırlamalar
Bu sürüm, eğitim yönergesindeki zorunlu bölüme odaklanır. Veriler bellekte tutulduğu için sunucu kapatılıp açıldığında kalıcı olmaz. Gelişmiş arama, sayfalama, ayrı raporlama servisleri ve kapsamlı doğrulama middleware'i isteğe bağlı geliştirmeler olarak bırakılmıştır.
