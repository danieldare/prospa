import { Button } from 'src/components/button';
import AccountOneIcon from '../../assets/img/account1.png';
import AccountTwoIcon from '../../assets/img/account2.png';
import BankIcon from '../../assets/img/bank.png';
import InternetIcon from '../../assets/img/interne.png';
import TransferIcon from '../../assets/img/transfer.png';
import MarketingIcon from '../../assets/img/marketing.png';

import {
    DashboardContainer,
    DashboardHeader,
    DashboardHeadingOne,
    DashboardHeadingTwo,
    DashboardBody,
    AccountInfoCard,
    AccountType,
    AccountName,
    AccountIconContainer,
    AccountIcon,
    AccountInfoCards,
    AccountBalance,
    AccountInfoTop,
    CashOutFlowContainer,
    AccountStats,
    AccountStatsTitle,
    CashFlowOptions,
    CashFlowOption,
    CashFlowOptionName,
    CashFlowIconContainer,
    CashFlowOptionLeft,
} from './dashboard.style';

const Dashboard = () => {
    return (
        <DashboardContainer>
            <DashboardHeader>
                <div>
                    <DashboardHeadingOne>Welcome back, Kathy </DashboardHeadingOne>
                    <DashboardHeadingTwo>
                        Here&apos;s what has been happening in the last <span>7days</span>
                    </DashboardHeadingTwo>
                </div>
                <Button type="button">Add a sub account</Button>
            </DashboardHeader>

            <DashboardBody>
                <AccountInfoCards>
                    <AccountInfoCard>
                        <AccountInfoTop>
                            <div>
                                <AccountType>Current Account</AccountType>
                                <AccountName>
                                    Providus bank - <span>9906533917</span>
                                </AccountName>
                            </div>
                            <AccountIconContainer>
                                <AccountIcon src={AccountOneIcon} />
                            </AccountIconContainer>
                        </AccountInfoTop>
                        <AccountBalance>
                            N821,800.<span>45</span>
                        </AccountBalance>
                    </AccountInfoCard>
                    <AccountInfoCard>
                        <AccountInfoTop>
                            <div>
                                <AccountType>Savings Account</AccountType>
                                <AccountName>
                                    Sub Account - <span>12346789</span>
                                </AccountName>
                            </div>
                            <AccountIconContainer>
                                <AccountIcon src={AccountTwoIcon} />
                            </AccountIconContainer>
                        </AccountInfoTop>
                        <AccountBalance>
                            N39,342.<span>45</span>
                        </AccountBalance>
                    </AccountInfoCard>
                </AccountInfoCards>

                <AccountStats>
                    <CashOutFlowContainer>
                        <AccountStatsTitle>June summary</AccountStatsTitle>
                    </CashOutFlowContainer>
                    <CashOutFlowContainer>
                        <AccountStatsTitle>Cash outflow</AccountStatsTitle>

                        <CashFlowOptions>
                            <CashFlowOption>
                                <CashFlowOptionLeft>
                                    <CashFlowIconContainer className="pink">
                                        <img src={BankIcon} alt="icon" />
                                    </CashFlowIconContainer>
                                    <CashFlowOptionName>Bank Fees</CashFlowOptionName>
                                </CashFlowOptionLeft>
                                <div>progress</div>
                            </CashFlowOption>
                        </CashFlowOptions>
                        <CashFlowOptions>
                            <CashFlowOption>
                                <CashFlowOptionLeft>
                                    <CashFlowIconContainer className="pink">
                                        <img src={InternetIcon} alt="icon" />
                                    </CashFlowIconContainer>
                                    <CashFlowOptionName>Internet </CashFlowOptionName>
                                </CashFlowOptionLeft>
                                <div>progress</div>
                            </CashFlowOption>
                        </CashFlowOptions>
                        <CashFlowOptions>
                            <CashFlowOption>
                                <CashFlowOptionLeft>
                                    <CashFlowIconContainer className="pink">
                                        <img src={MarketingIcon} alt="icon" />
                                    </CashFlowIconContainer>
                                    <CashFlowOptionName>Marketing</CashFlowOptionName>
                                </CashFlowOptionLeft>
                                <div>progress</div>
                            </CashFlowOption>
                        </CashFlowOptions>
                        <CashFlowOptions>
                            <CashFlowOption>
                                <CashFlowOptionLeft>
                                    <CashFlowIconContainer className="pink">
                                        <img src={TransferIcon} alt="icon" />
                                    </CashFlowIconContainer>
                                    <CashFlowOptionName>Transfer</CashFlowOptionName>
                                </CashFlowOptionLeft>
                                <div>progress</div>
                            </CashFlowOption>
                        </CashFlowOptions>
                    </CashOutFlowContainer>
                </AccountStats>
            </DashboardBody>
        </DashboardContainer>
    );
};

export { Dashboard };
