import { motion } from "framer-motion"

export default function PrivacyPolicyMobile() {
  return (
    <div className="pt-[8rem] pb-20 flex items-center justify-center flex-col md:hidden max-w-[95%]">
      <div className="flex w-full px-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-5 w-full"
        >
          <div className="flex flex-col space-y-2">
            <h1 className="w-full leading-none text-[#191918] text-[32px] font-inter font-medium">
              Datenschutzerklärung für Webmacht
            </h1>
            <p className="text-[#6F6F6F] text-[15px]">
              (Standards gemäß der Datenschutz-Grundverordnung - DSGVO)
            </p>
          </div>

          <div className="flex flex-col space-y-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                1. Einführung
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Der Schutz Ihrer persönlichen Daten ist uns bei Webmacht,
                Ihrem Partner für Webentwicklungsdienstleistungen, besonders
                wichtig. Diese Datenschutzerklärung informiert Sie darüber,
                wie wir Ihre personenbezogenen Daten erheben, verarbeiten und
                speichern. Wir halten uns dabei streng an die Vorgaben der
                Datenschutz-Grundverordnung (DSGVO) sowie die nationalen
                Datenschutzgesetze.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                2. Verantwortlicher
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Verantwortlich für die Datenverarbeitung auf dieser Website:
              </p>
              <p className="w-full text-[#4C4C4C] text-base font-semibold leading-tight">
                Webmacht
              </p>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                E-Mail: hallo@webmacht.de
              </p>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Adresse: Struthstr. 1, 63607 Wächtersbach, Deutschland
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                3. Erhobene Daten
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Wir erheben und verarbeiten nur die Daten, die für die
                Bereitstellung unserer Dienstleistungen und die Kommunikation
                mit Ihnen erforderlich sind:
              </p>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Kontaktinformationen:</span>{" "}
                  Vorname, Nachname, E-Mail-Adresse, Telefonnummer.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Geschäftsdaten:</span>{" "}
                  Informationen über Ihre Geschäftsstrategie, Betriebsdaten
                  oder andere vertrauliche Informationen, die Sie uns im
                  Rahmen der Projektentwicklung zur Verfügung stellen.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">
                    Technische Daten (bei Website-Nutzung):
                  </span>{" "}
                  IP-Adresse, Browser-Typ, Zugriffszeiten (sofern notwendig
                  für die Sicherheit unserer Website).
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                4. Zwecke der Datenverarbeitung und Rechtsgrundlagen
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Wir verarbeiten Ihre personenbezogenen Daten zu folgenden
                Zwecken auf der Basis der nachstehenden Rechtsgrundlagen gemäß
                Art. 6 DSGVO:
              </p>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Kommunikation:</span> Um mit
                  Ihnen über Ihre Anfragen und Projektentwicklungen zu
                  kommunizieren (Rechtsgrundlage: Vertragserfüllung, Art. 6
                  Abs. 1 lit. b DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Projektabwicklung:</span> Zur
                  Planung, Entwicklung und Durchführung Ihrer
                  Webentwicklungsprojekte (Rechtsgrundlage: Vertragserfüllung,
                  Art. 6 Abs. 1 lit. b DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">
                    Vertrauliche Geschäftsbeziehungen:
                  </span>{" "}
                  Um sensible Geschäfts- oder strategische Informationen
                  vertraulich zu behandeln (Rechtsgrundlage: berechtigtes
                  Interesse, Art. 6 Abs. 1 lit. f DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Sicherheit und Schutz:</span>{" "}
                  Zur Sicherstellung der Sicherheit unserer IT-Systeme und der
                  Vermeidung von Missbrauch (Rechtsgrundlage: berechtigtes
                  Interesse, Art. 6 Abs. 1 lit. f DSGVO).
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                5. Speicherung und Löschung Ihrer Daten
              </h2>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Ihre Daten werden nur so lange gespeichert, wie es für die
                  oben genannten Zwecke erforderlich ist, es sei denn, es
                  bestehen gesetzliche Aufbewahrungsfristen (z. B. steuerliche
                  Vorgaben).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Konkret löschen wir:</span>
                  <ul className="w-full pl-4 space-y-2">
                    <li className="w-full text-[#4C4C4C] text-base leading-tight">
                      <span className="text-black">
                        Kontaktinformationen:
                      </span>{" "}
                      3 Monate nach Projektabschluss, sofern keine weiteren
                      Geschäftsbeziehungen bestehen.
                    </li>
                    <li className="w-full text-[#4C4C4C] text-base leading-tight">
                      <span className="text-black">Geschäftsdaten:</span> Nach
                      6 Jahren gemäß den steuerlichen Aufbewahrungspflichten
                      (§ 147 AO).
                    </li>
                  </ul>
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Technische Daten werden nach 30 Tagen gelöscht, sofern sie
                  nicht für die Sicherheit unserer IT-Systeme benötigt werden.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                6. Sicherheit Ihrer Daten
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust oder
                Missbrauch zu schützen, z. B.:
              </p>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Verschlüsselung von Datenübertragungen (z. B. SSL/TLS für
                  Website-Kommunikation).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Zugriffsbeschränkungen auf vertrauliche Daten.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Regelmäßige Sicherheitsüberprüfungen unserer IT-Systeme.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                7. Weitergabe Ihrer Daten
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Ihre Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
                Dritte weitergegeben, es sei denn:
              </p>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Die Weitergabe ist gesetzlich vorgeschrieben (z. B. an
                  Behörden).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Sie ist für die Vertragserfüllung erforderlich (z. B. an
                  Subdienstleister, mit denen Verträge zur
                  Auftragsverarbeitung geschlossen wurden).
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                8. Ihre Rechte
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Sie haben gemäß der DSGVO folgende Rechte in Bezug auf Ihre
                personenbezogenen Daten:
              </p>
              <ul className="w-full pl-4 space-y-2">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Recht auf Auskunft:</span> Sie
                  können eine Kopie der bei uns gespeicherten Daten anfordern
                  (Art. 15 DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Recht auf Berichtigung:</span>{" "}
                  Sie können unrichtige oder unvollständige Daten berichtigen
                  lassen (Art. 16 DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Recht auf Löschung:</span> Siekönnen die Löschung Ihrer Daten verlangen, sofern keine
                  gesetzlichen Aufbewahrungspflichten bestehen (Art. 17
                  DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">
                    Recht auf Einschränkung der Verarbeitung:
                  </span>{" "}
                  Sie können die Einschränkung der Verarbeitung Ihrer Daten
                  verlangen (Art. 18 DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">Recht auf Widerspruch:</span>{" "}
                  Sie können der Verarbeitung Ihrer Daten widersprechen (Art.
                  21 DSGVO).
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  <span className="text-black">
                    Recht auf Datenübertragbarkeit:
                  </span>{" "}
                  Sie können verlangen, dass wir Ihnen Ihre Daten in einem
                  maschinenlesbaren Format bereitstellen (Art. 20 DSGVO).
                </li>
              </ul>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
                hallo@webmacht.de
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                9. Cookies und Tracking-Technologien
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Wir verwenden derzeit keine Cookies oder
                Tracking-Technologien, um Ihr Nutzungsverhalten auf unserer
                Website zu analysieren. Sollten wir solche Technologien in
                Zukunft einführen, werden wir Sie darüber informieren und Ihre
                Einwilligung einholen.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                10. Datenübermittlungen außerhalb der EU
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Ihre personenbezogenen Daten werden ausschließlich innerhalb
                der Europäischen Union verarbeitet. Eine Übermittlung in
                Drittländer erfolgt nur mit Ihrer ausdrücklichen Zustimmung
                und unter Einhaltung der DSGVO (z. B. durch den Abschluss von
                Standardvertragsklauseln).
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                11. Änderungen an dieser Datenschutzerklärung
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
                aktualisieren, z. B. aufgrund von gesetzlichen Änderungen oder
                neuen Technologien. Bitte überprüfen Sie regelmäßig diese
                Seite, um über Änderungen informiert zu bleiben.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                12. Kontakt
              </h2>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Für Fragen oder Anliegen zu dieser Datenschutzerklärung oder
                zur Verarbeitung Ihrer personenbezogenen Daten kontaktieren
                Sie uns bitte:
              </p>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Webmacht
              </p>
              <a
                href="mailto:hallo@webmacht.de"
                className="w-full text-[#55C056] text-base leading-tight"
              >
                Email: hallo@webmacht.de
              </a>
              <p className="w-full text-[#55C056] text-base leading-tight">
                Adresse: Struthstr. 1, 63607 Wächtersbach, Deutschland
              </p>
              <p className="w-full text-[#4C4C4C] text-base leading-tight">
                Vielen Dank, dass Sie Webmacht Ihr Vertrauen schenken. Der
                Schutz Ihrer Privatsphäre hat für uns höchste Priorität.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

