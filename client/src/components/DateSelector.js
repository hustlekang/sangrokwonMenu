export default function DateSelector({
  maxDateString,
  dateString,
  handleDateChange,
}) {
  return (
    <>
      <label htmlFor="datepicker">날짜를 선택하세요</label>
      <input
        id="datepicker"
        type="date"
        max={maxDateString}
        defaultValue={dateString}
        onChange={handleDateChange}
      />
      <label htmlFor="datepicker" className="label-grey">
        <p>2010년 ~ 차주까지 가능</p>
        <p>메뉴 확인 불가 시 학교 서버 업데이트 전</p>
      </label>
    </>
  );
}
