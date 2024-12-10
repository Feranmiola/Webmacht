/* eslint-disable */
import { motion } from "framer-motion"

export default function AGBMobile() {
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
            <h1 className="w-full leading-none text-[#191918] text-[24px] font-inter font-medium">
              Allgemeine Geschäftsbedingungen (AGB) der Webmacht
            </h1>
          </div>

          <div className="flex flex-col space-y-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                1. Geltungsbereich
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen der WebMacht, Struthstr. 1, 63607 Wächtersbach, Deutschland, hallo@webmacht.de (im Folgenden "Anbieter") und ihren Kunden (im Folgenden "Kunde").
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Maßgeblich ist die jeweils zum Zeitpunkt des Vertragsschlusses gültige Fassung dieser AGB.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                2. Leistungen des Anbieters
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter erbringt Dienstleistungen im Bereich der Webentwicklung, einschließlich, aber nicht beschränkt auf:
                  <ul className="w-full pl-4 space-y-1 list-disc mt-2">
                    <li>Erstellung und Design von Websites und Webanwendungen</li>
                    <li>Entwicklung von individuellen Softwarelösungen</li>
                    <li>Wartung und Pflege bestehender Websites und Webanwendungen</li>
                    <li>Suchmaschinenoptimierung (SEO)</li>
                    <li>Webhosting und Domainverwaltung</li>
                    <li>Sicherheitsupdates und Backups</li>
                  </ul>
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot und/oder Vertrag.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                3. Vertragsschluss
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Ein Vertrag zwischen dem Anbieter und dem Kunden kommt durch die Annahme eines Angebots des Anbieters durch den Kunden zustande.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Angebote des Anbieters sind freibleibend und unverbindlich, es sei denn, sie sind ausdrücklich als verbindlich gekennzeichnet.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter behält sich das Recht vor, Aufträge ohne Angabe von Gründen abzulehnen.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                4. Preise und Zahlungsbedingungen
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Die Preise für die Dienstleistungen des Anbieters ergeben sich aus dem jeweiligen Angebot.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig, sofern nichts anderes vereinbart wurde.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz zu verlangen. Weitergehende Ansprüche bleiben unberührt.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                5. Mitwirkungspflichten des Kunden
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Kunde verpflichtet sich, alle zur Durchführung der Dienstleistungen erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig und vollständig zur Verfügung zu stellen.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Verzögerungen, die durch unzureichende Mitwirkung des Kunden entstehen, gehen zu Lasten des Kunden.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Kunde ist verpflichtet, die erbrachten Leistungen unverzüglich zu prüfen und etwaige Mängel dem Anbieter unverzüglich anzuzeigen.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                6. Leistungszeit und Verzug
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Leistungsfristen und -termine sind nur verbindlich, wenn sie ausdrücklich als solche vereinbart wurden.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter haftet nicht für Verzögerungen, die durch höhere Gewalt oder andere vom Anbieter nicht zu vertretende Umstände verursacht werden.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Bei Verzögerungen, die der Anbieter zu vertreten hat, ist der Kunde erst nach fruchtlosem Ablauf einer angemessenen Nachfrist zur Geltendmachung weiterer Rechte berechtigt.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                7. Gewährleistung und Haftung
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter gewährleistet, dass die erbrachten Dienstleistungen den vertraglich vereinbarten Anforderungen entsprechen.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um die Verletzung wesentlicher Vertragspflichten.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme der Leistung.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                8. Urheberrecht und Nutzungsrechte
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter behält sich alle Urheberrechte an den erbrachten Dienstleistungen vor.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht an den erstellten Werken, soweit dies zur Nutzung der Dienstleistungen erforderlich ist.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Eine Weitergabe der Nutzungsrechte an Dritte bedarf der ausdrücklichen schriftlichen Zustimmung des Anbieters.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                9. Vertraulichkeit
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen geheim zu halten und nur für die vertraglich vereinbarten Zwecke zu verwenden.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                10. Wartungsarbeiten und Updates
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter führt regelmäßige Wartungsarbeiten und Sicherheitsupdates durch, um die Funktionalität und Sicherheit der Websites und Webanwendungen zu gewährleisten.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Kunde wird über geplante Wartungsarbeiten, die zu einer vorübergehenden Nichtverfügbarkeit der Dienste führen können, rechtzeitig informiert.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Der Anbieter haftet nicht für Schäden, die durch notwendige Wartungsarbeiten oder Sicherheitsupdates entstehen, es sei denn, diese wurden vorsätzlich oder grob fahrlässig verursacht.
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col space-y-2 w-full"
            >
              <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                11. Schlussbestimmungen
              </h2>
              <ol className="w-full pl-4 space-y-2 list-decimal">
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </li>
                <li className="w-full text-[#4C4C4C] text-base leading-tight">
                  Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Anbieters.
                </li>
              </ol>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

