import React from 'react'
import NewsCardButton from './NewsCardButton'
import { useTranslations } from 'next-intl';

export default function NewsTags() {
    const t = useTranslations("Home.news");

  return (
    <div className="flex gap-[6px]">
    <NewsCardButton>{t("tags.contracts")}</NewsCardButton>
    <NewsCardButton>{t("tags.alzaeem")}</NewsCardButton>
  </div>
  )
}
