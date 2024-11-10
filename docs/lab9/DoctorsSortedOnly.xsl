<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />

    <xsl:template match="/">
        <html lang="uk">
            <head>
                <meta charset="UTF-8"/>
                <style>
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #000; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Спеціалізація</th>
                        <th>Прізвище</th>
                        <th>Ім'я</th>
                        <th>По батькові</th>
                        <th>Дні прийому</th>
                        <th>Час прийому</th>
                        <th>Кабінет</th>
                    </tr>
                    <xsl:for-each select="medical_center/doctor[specialization='Кардіолог']">
                        <xsl:sort select="name/last_name" />
                        <tr>
                            <td><xsl:value-of select="specialization"/></td>
                            <td><xsl:value-of select="name/last_name"/></td>
                            <td><xsl:value-of select="name/first_name"/></td>
                            <td><xsl:value-of select="name/middle_name"/></td>
                            <td><xsl:value-of select="schedule/days"/></td>
                            <td><xsl:value-of select="schedule/time"/></td>
                            <td><xsl:value-of select="office"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
