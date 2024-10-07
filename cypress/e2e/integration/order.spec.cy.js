describe("Sipariş Sayfası Kontrolleri", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/pizzas/1").as("getPizzas");

    cy.visit("http://localhost:5173/order/1");
    cy.wait("@getPizzas");
  });

  it("Checkbox'a tıklandığında boyut seçimi yapılabiliyor mu?", () => {
    // Boyut seçeneği 1'e tıklayın
    cy.get('input[type="radio"][value="Küçük"]').check();

    // Seçilen boyutun kontrol edildiğini doğrulayın
    cy.get('input[type="radio"][value="Küçük"]').should("be.checked");

    // Boyut seçeneği 2'ye tıklayın
    cy.get('input[type="radio"][value="Orta"]').check();

    // Boyut 2'nin kontrol edildiğini doğrulayın
    cy.get('input[type="radio"][value="Orta"]').should("be.checked");

    // Boyut 1'in kontrolünün kaldırıldığını doğrulayın
    cy.get('input[type="radio"][value="Küçük"]').should("not.be.checked");
  });

  it("Seçeneklere tıkladığında seçeneklerin görünmesini sağlar", () => {
    // Seçim alanına tıklayın ve görünür olduğundan emin olun
    cy.get(".css-13cymwt-control", { timeout: 10000 }).click();

    // Seçeneklerin görünür olduğunu kontrol edin
    cy.get(".css-1nmdiq5-menu", { timeout: 10000 }).should("be.visible");

    // Örnek bir seçenek üzerinde tıklayın
    cy.get(".css-1nmdiq5-menu").contains("İnce").click();

    // Seçimin başarılı bir şekilde yapıldığını kontrol edin
    cy.get("input[name='hamurKalinligiTest']").should("have.value", "İnce");
  });
  it("Yeni bir seçenek seçmek isterse seçebiliyor", () => {
    cy.get(".css-13cymwt-control", { timeout: 10000 }).click();

    cy.get(".css-1nmdiq5-menu", { timeout: 10000 }).should("be.visible");
    cy.get(".css-1nmdiq5-menu").contains("Kalın").click();

    cy.get("input[name='hamurKalinligiTest']").should("have.value", "Kalın");
  });
  it("Varsayılan olarak seçili olan checkboxlarla birlikte 4'ten az seçim olduğunda hata mesajı gösteriliyor mu?", () => {
    // Sayfa yüklendikten sonra varsayılan olarak seçili checkboxların sayısını kontrol edin
    cy.get("input[type='checkbox']:checked").then((checkedCheckboxes) => {
      const selectedCount = checkedCheckboxes.length;

      cy.log(`Seçili checkbox sayısı: ${selectedCount}`); // Seçili checkbox sayısını logla

      // Eğer varsayılan olarak seçili checkbox sayısı 4'ten az ise, hata mesajı bekliyoruz
      if (selectedCount < 4) {
        // Hata mesajının görünür olduğunu kontrol edin
        cy.wait(5000); // Hata mesajının gösterilmesi için bekleyin
        cy.get(".hata-mesaji") // Hata mesajının bulunduğu sınıfı güncelleyin
          .should("be.visible")
          .and("contain", "En az 4 malzeme seçmelisiniz."); // Beklenen hata mesajını güncelleyin
      }
    });
  });

  it("Checkbox seçim sayısı 4'ten az olduğunda hata mesajı gösteriliyor mu?", () => {
    // Varsayılan olarak seçili olan checkboxları kontrol et
    cy.get("input[type='checkbox']:checked").then((checkedCheckboxes) => {
      // Varsayılan checkboxlardan en az 4 tanesi seçili değilse, kullanıcıdan seçim yapmasını iste
      cy.log(`Seçili checkbox sayısı: ${checkedCheckboxes.length}`); // Seçili checkbox sayısını logla
      console.log("dsaf", checkedCheckboxes.length);
      if (checkedCheckboxes.length < 4) {
        // Kullanıcıdan 2 checkbox seçmesi
        cy.get("#malzeme-0").uncheck(); // İlk checkboxı seç
        cy.get("#malzeme-0").should("not.be.checked");
        cy.wait(5000); // İlk checkboxın seçilmesi için bekleyin
        cy.log("İlk checkbox seçildi.");

        cy.get("#malzeme-1").uncheck(); // İkinci checkboxı seç
        cy.get("#malzeme-1").should("not.be.checked");
        cy.wait(5000); // İkinci checkboxın seçilmesi için bekleyin
        cy.log("İkinci checkbox seçildi.");

        // Hata mesajının görünür olduğunu kontrol edin
        cy.wait(5000); // Hata mesajının gösterilmesi için bekleyin
        cy.get(".hata-mesaji") // Hata mesajının bulunduğu sınıfı güncelleyin
          .should("be.visible")
          .and("contain", "En az 4 malzeme seçmelisiniz."); // Beklenen hata mesajını güncelleyin
      }
    });
  });
  it("3 harften fazla isim girdiğinde hata mesajı gösterilmemeli", () => {
    // İsim input alanını seç
    const longName = "Ahmet";

    // İsim alanına 4 harfli bir isim yaz
    cy.get("#name") // İsim inputunun ID'sini kullan
      .type(longName)
      .should("have.value", longName); // Girilen değeri kontrol et

    // Hata mesajının görünür olmadığını kontrol et
    cy.get(".form-feedback") // Hata mesajı sınıfını güncelleyin
      .should("not.exist"); // Hata mesajı olmamalı
  });

  it("bütün gereklilikleri yerine getirdiğinde sipariş ver butonu enabled duruma geçer", () => {
    //boyut seçimi
    cy.get('input[type="radio"][value="Küçük"]').check();
    cy.get('input[type="radio"][value="Küçük"]').should("be.checked");

    //hamur kalınlığı seçimi
    cy.get(".css-13cymwt-control", { timeout: 10000 }).click();
    cy.get(".css-1nmdiq5-menu", { timeout: 10000 }).should("be.visible");
    cy.get(".css-1nmdiq5-menu").contains("İnce").click();
    cy.get("input[name='hamurKalinligiTest']").should("have.value", "İnce");

    //malzeme seçimi

    cy.get("input[type='checkbox']").eq(7).check();
    cy.get("input[type='checkbox']:checked").eq(0).uncheck();
    cy.get("input[type='checkbox']").eq(0).should("not.be.checked");
    cy.get("#malzeme-1").uncheck();
    cy.get("#malzeme-1").should("not.be.checked");
    cy.get("#malzeme-7").uncheck();
    cy.get("#malzeme-7").should("not.be.checked");

    cy.get("input[type='checkbox']:checked").then((checkedCheckboxes) => {
      const count = checkedCheckboxes.length; // İşaretli checkbox sayısını al
      cy.log("Checkbox sayısı: ", count); // Sayıyı logla

      if (count < 4) {
        cy.wait(100);
        cy.get("#malzeme-13").check(); // Malzeme-4 checkbox'ını işaretle
        cy.wait(100);
        cy.get("#malzeme-13").should("be.checked"); // Malzeme-4'ün işaretlendiğini kontrol et
      }
    });

    const longName = "Ndombele";
    const siparisNotu = "Ketçap,mayonez olsun.";
    cy.get("#name") // İsim inputunun ID'sini kullan
      .type(longName)
      .should("have.value", longName); // Girilen değeri kontrol et

    // Hata mesajının görünür olmadığını kontrol et
    cy.get(".form-feedback") // Hata mesajı sınıfını güncelleyin
      .should("not.exist"); // Hata mesajı olmamalı

    cy.get("#notes").type(siparisNotu).should("have.value", siparisNotu);

    cy.get('button[data-cy="submitButton"]').click();

    cy.get('button[data-cy="anasayfaRouter"]').click();
  });
});
